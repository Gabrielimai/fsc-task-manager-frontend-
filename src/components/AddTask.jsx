import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useAlert } from "react-alert";

import CustomImput from "./CustomImput";
import CustomButton from "./CustomButton";

import "./AddTask.scss";

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("");

    const alert = useAlert();

    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskSddition = async () => {
        try {
            if (task.length === 0) {
                return alert.error(
                    "A tarefa precisa de uma descrição para ser adicionada."
                );
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                iscompleted: false,
            });

            await fetchTasks();

            setTask("");

            await alert.success("A tarefa foi adicionada com successo!");
        } catch (_error) {
            alert.error("Algo deu errado.");
        }
    };

    return (
        <div className="add-task-container">
            <CustomImput
                label="Adicionar tarefas ..."
                value={task}
                onChange={onChange}
                onEnterPress={handleTaskSddition}
            />
            <CustomButton onClick={handleTaskSddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
