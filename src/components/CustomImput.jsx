import "./CustomImput.scss";

const CustomImput = ({ label, value, onChange, onEnterPress }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onEnterPress();
        }
    };
    return (
        <div className="custom-input-container">
            <input
                type="text"
                className="custom-input"
                value={value}
                onChange={(e) => onChange(e)}
                onKeyDown={(e) => handleKeyDown(e)}
            />

            {label ? (
                <label
                    className={`${
                        value.length > 0 ? "shrink" : ""
                    } custom-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default CustomImput;
