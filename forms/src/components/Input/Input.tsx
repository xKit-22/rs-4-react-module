import './input.css'

interface IInputProps {
    type: string
    name: string
    value?: string
    placeholder?: string
    label?: string
    description?: string
    error?: string
    disabled?: boolean
    withAsterisk?: boolean
    radius?: "xs" | "sm" | "md" | "lg" | "xl"
    size?: "xs" | "sm" | "md" | "lg" | "xl"
    variant?: "default" | "filled" | "unstyled"
}

export function Input({
                          type,
                          name,
                          value,
                          placeholder,
                          label,
                          description,
                          error,
                          disabled = false,
                          withAsterisk = false,
                          radius = "sm",
                          size = "sm",
                          variant = "default",
                      }: IInputProps) {

    const asteriskStyle = withAsterisk ? "asterisk" : ""

    return (
        <>
            <label className={`${asteriskStyle}`} key={name}>{label}
                <div>{description}</div>
                <input
                    className={error ? "error_input" : ""}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={withAsterisk}
                />
            </label>
            <div className="error_text">{error}</div>
        </>
    )
}