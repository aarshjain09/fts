import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const ChatRoomsList = ({ onJoinRoom }) => {
    const [rooms, setRooms] = useState([]);
    const [newRoom, setNewRoom] = useState("");

    useEffect(() => {
        socket.on("roomList", (updatedRooms) => {
            setRooms(updatedRooms);
        });

        // Request rooms when the component mounts
        socket.emit("requestRooms");

        return () => {
            socket.off("roomList");
        };
    }, []);

    const createRoom = () => {
        if (newRoom.trim()) {
            socket.emit("createRoom", newRoom);
            setNewRoom("");
        }
    };

    return (
        <div>
            <h2>Available Chat Rooms</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room}>
                        <button onClick={() => onJoinRoom(room)}>Join {room}</button>
                    </li>
                ))}
            </ul>

            <input
                type="text"
                value={newRoom}
                onChange={(e) => setNewRoom(e.target.value)}
                placeholder="Enter room name"
            />
            <button onClick={createRoom}>Create Room</button>
        </div>
    );
};

export default ChatRoomsList;
