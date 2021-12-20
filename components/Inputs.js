import React from 'react';
import Select from 'react-select';

export const CustomDropdown = ({
  name,
  onChange,
  className,
  placeholder,
  options,
  label,
  classNamePrefix,
  id,
  isMulti,
  value,
}) => {
  return (
    <div className={className} id={id}>
      <label>
        {label || ''} <br></br>
        <Select
          defaultValue={value}
          value={value}
          name={name}
          options={options}
          onChange={(e) => onChange(e, name)}
          placeholder={placeholder}
          classNamePrefix={classNamePrefix}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: 'black',
            },
          })}
          isMulti={isMulti}
        />
      </label>
    </div>
  );
};
