import * as React from "react";
import { AddItemInputComponent } from "../AddItemInput";
import { Action } from "redux-actions";
import * as style from "./style.css";

export interface IHeaderProps {
  createLane: any;
}

export class Header extends React.Component<IHeaderProps, {}> {

  constructor(props?: IHeaderProps, context?: any) {
    super(props, context);
    this.handleSave = this.handleSave.bind(this);
  }

  public render() {
    return (
      <header className={style.toolbar}>
        <div className={style.float_right}>
          <AddItemInputComponent
            className={style.txt_newlane}
            placeholder="New lane"
            onSave={this.handleSave}
          />
        </div>
        <label className={style.header_txt}>Kanban Board</label>
      </header>
    );
  }
  private handleSave(text: string): void {
    if (text.length) {
      this.props.createLane({ text });
    }
  }
}
