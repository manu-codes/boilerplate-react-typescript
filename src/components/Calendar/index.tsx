import * as React from "react";

import * as style from "./style.css";


export interface CalendarProps extends IGenericProps {
  lanes: ILane[];
}

export class Calendar extends React.Component<CalendarProps, {}> {
  public render() {
    const { lanes } = this.props;
    return (
      <div
        className={style.horizontal_scroll}
      >
        {this.renderListItems(lanes)}
      </div>
    );
  }
  private renderListItems(lanes) {
    if (lanes.length > 0) {
      return lanes.map((lane: ILane) => (
        <LaneComponent
          className={style.lanes}
          key={lane.id}
          lane={lane}
        />
      ));
    } else {
      return (
        <div className={style.arrow_container}>
          <img src={require("./arrow.png")} className={style.arrow} />
          <div className={style.arrow_txt}>
            Add new lane from here
          </div>
        </div>
      );
    }
  }
}
