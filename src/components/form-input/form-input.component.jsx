import { Label,Group,Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input {...otherProps} />
            {Label && (
                <Label shrink={otherProps.value.length}>
                    {label}
                </Label>
            )}
        </Group>
    );
};

export default FormInput;
