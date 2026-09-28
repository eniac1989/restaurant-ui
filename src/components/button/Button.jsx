import "./Button.css";

function Button({ children, variant = "primary", size = "medium", disabled = false }) {
    return (
        <button
            className={`button button-${variant} button-${size}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;