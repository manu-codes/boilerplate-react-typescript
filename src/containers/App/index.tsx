import * as React from "react";
import * as style from "./style.css";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { IRootState } from "../../reducers";
import { createLane } from "../../actions/lanes";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { Header } from "../../components/Header/index";


export interface IAppProps extends IGenericProps {
  lanes: ILane[];
  createLane: any;
}

export class App extends React.Component<IAppProps, {}> {

  public render() {
    const { lanes } = this.props;

    return (
      <div className={style.main}>
        <Header createLane={this.props.createLane} />
        <LanesComponent lanes={lanes} />
      </div>
    );
  }
}

export default compose(
  connect((state) => ({
    lanes: state.lanes,
  }), {
    createLane,
    }),
  DragDropContext(HTML5Backend),
)(App);
