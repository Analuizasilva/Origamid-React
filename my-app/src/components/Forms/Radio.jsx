const Radio = ({ ...props }) => {
  // if (props.active === false) return null;
  console.log(props.active);
  return (
    <label>
      {props.option}
      <input
        active={true}
        id={props.id}
        type="radio"
        checked={props.value === props.option}
        value={props.option}
        onChange={props.onChange}
      />
    </label>
  );
};
export default Radio;
