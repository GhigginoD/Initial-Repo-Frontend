import { AutoComplete, Form, Input, Select, Switch } from "antd";
import { FC } from "react";

import TextArea from "antd/lib/input/TextArea";
import styles from "./style.module.scss";

const { Option } = Select;

type InputDTO = {
  name: string;
  label: string;
  rules?: any;
  mask?: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: any;
  tooltip?: string;
  onChange?: any;
  type?: string;
};

type Option = {
  value: string | boolean | number;
  title: string | boolean | number;
};

type DropListDTO = {
  name: [] | string;
  label?: string;
  value?: any;
  rules?: any;
  options: Option[];
  showSearch?: boolean;
  mode?: string | any;
  onChange?: any;
  defaultValue?: any;
  autoClearSearchValue?: boolean;
  maxTagCount?: any;
  allowClear?: boolean;
  className?: any;
  tagRender?: any;
  loading?: boolean;
  style?: any;
  ref?: any;
  disabled?: boolean;
  notFoundContent?: any;
  searchValue?: string;
  onSearch?: any;
  dropDownRender?: any;
};

type OptionCompleteDTO = {
  value: string;
  title: string;
};

type InputCompleteDTO = {
  options: OptionCompleteDTO[];
  name: string;
  label: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  rules?: any;
};

export const InputText: FC<InputDTO> = ({
  name,
  label,
  rules,
  placeholder,
  defaultValue,
  disabled = false,
  tooltip,
  onChange,
  type,
}) => {
  return (
    <Form.Item
      className={styles.form__input}
      name={name}
      label={label}
      rules={rules}
      initialValue={defaultValue}
      tooltip={tooltip}
    >
      <Input
        className={styles.input}
        autoComplete="off"
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </Form.Item>
  );
};

export const DropList: FC<DropListDTO> = ({
  name,
  label,
  value,
  options,
  rules,
  mode,
  onChange,
  defaultValue,
  autoClearSearchValue,
  maxTagCount,
  showSearch = true,
  className,
  tagRender,
  loading,
  allowClear = true,
  style,
  ref,
  notFoundContent,
  dropDownRender,
  ...rest
}) => {
  return (
    <Form.Item
      className={className ? className : styles.form__input}
      style={style}
      name={name}
      label={label}
      rules={rules}
      initialValue={defaultValue}
    >
      <Select
        {...rest}
        loading={loading}
        dropdownRender={dropDownRender}
        placeholder="Selecione uma opção"
        allowClear={allowClear}
        showSearch={showSearch}
        optionFilterProp="label"
        notFoundContent={notFoundContent ?? "Nenhum resultado encontrado"}
        mode={mode}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        autoClearSearchValue={autoClearSearchValue}
        maxTagCount={maxTagCount}
        tagRender={tagRender}
        ref={ref}
      >
        {options?.map((option, key) => {
          return (
            <Option key={key} value={option.value} label={option.title}>
              {option.title}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
};

export const InputToogle: FC<any> = ({ name, label, onChange }) => {
  return (
    <Form.Item className={styles.form__input} name={name} label={label}>
      <Switch onChange={onChange} />
    </Form.Item>
  );
};

export const InputTextArea: FC<any> = ({
  name,
  label,
  onChange,
  rules,
  defaultValue,
}) => {
  return (
    <Form.Item
      className={styles.form__input}
      name={name}
      label={label}
      rules={rules}
    >
      <TextArea
        rows={8}
        showCount
        maxLength={200}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </Form.Item>
  );
};

export const InputComplete: FC<InputCompleteDTO> = ({
  options,
  name,
  label,
  defaultValue,
  onChange,
  placeholder,
  rules,
}) => {
  return (
    <Form.Item
      className={styles.form__input}
      name={name}
      label={label}
      rules={rules}
      initialValue={defaultValue}
    >
      <AutoComplete
        onSelect={(option: any) => {
          option;
        }}
        onChange={onChange}
        style={{ width: "100%" }}
        options={options}
        placeholder={placeholder}
        filterOption={(inputValue, option) =>
          option?.value?.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </Form.Item>
  );
};
