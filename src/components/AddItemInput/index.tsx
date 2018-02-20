import * as React from "react";
import * as style from "./style.css";


export interface IAddItemInputProps {
  text?: string;
  placeholder?: string;
  editing?: boolean;
  onSave: (text: string, e: any) => void;
  className?: string;
}

export interface IAddItemInputState {
  text: string;
}


export class AddItemInputComponent extends React.Component<IAddItemInputProps, IAddItemInputState> {

  constructor(props?: IAddItemInputProps, context?: any) {
    super(props, context);
    this.state = {
      text: this.props.text || "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public render() {
    let { className } = this.props;
    className = className ? className : style.txt;
    return (
      <input
        className={className}
        type="text"
        autoFocus
        placeholder={this.props.placeholder}
        value={this.state.text}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
  private handleSubmit(e: any): void {
    const text = e.target.value.trim();
    if (e.which === 13 && text) {
      this.props.onSave(text, e);
      this.setState({ text: "" });
    }
  }

  private handleChange(e: any): void {
    this.setState({ text: e.target.value });
  }
}
