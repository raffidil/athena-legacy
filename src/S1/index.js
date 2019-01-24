import React from "react";
import {
  IconButton,
  Grid,
  Cell,
  Dialog,
  DialogTitle,
  DialogContent,
  Icon,
  Spinner
} from "react-mdl";
import { shuffle } from "underscore";
import Layout from "../../components/Layout";
import ResultDialog from "../../components/ResultDialog";
import s from "../Questionstyles.css";
import AnswerCard from "../../components/AnswerCard";
import history from "../history";
import Timer from "../../components/Timer";
import Questions from "./questions";
import time from "./time.gif";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialogCorrect: false,
      openDialogWrong: false,
      openDialogWait: false,
      reveal: false,
      pauseTimer: false
    };
  }

  componentWillMount() {
    const id = parseInt(this.props.route.params.id, 10);
    this.question = Questions[id];
    this.answers = shuffle(this.question.answers);
  }

  componentDidMount() {
    document.title = this.question.id;
  }

  showResult = correct => {
    this.setState({
      openDialogCorrect: correct,
      openDialogWrong: !correct,
      openDialogWait: false,
      reveal: true
    });
  };

  answer = correct => {
    this.setState({ openDialogWait: true, pauseTimer: true });
    setTimeout(this.showResult, 2500, correct);
  };

  gotoScience = () => {
    history.push({ pathname: "/science" });
  };

  render() {
    return (
      <Layout className={s.content}>
        <h1 className={s.fontstyle1} style={{ marginTop: "10px" }}>
          <Grid className="demo-grid-1">
            <Cell col={1}>
              <IconButton
                style={{ color: "#263238" }}
                name="arrow_forward"
                colored
                onClick={this.gotoScience}
              />
            </Cell>
            <Cell
              col={11}
              className={s.ScienceQuestionFont}
              style={{ fontSize: this.question.fontSize || "45px" }}
            >
              <p
                className={s.ScienceQuestionFont}
                style={{ fontSize: this.question.fontSize || "45px" }}
              >
                {this.question.text}
              </p>
              <p
                className={s.ScienceQuestionFont}
                style={{
                  lineHeight: "1.2",
                  fontSize: this.question.fontSize || "30px"
                }}
              >
                {this.question.text2}
              </p>
              <p
                className={s.ScienceQuestionFont}
                style={{
                  lineHeight: "1.2",
                  fontSize: this.question.fontSize || "30px"
                }}
              >
                {this.question.text3}
              </p>
            </Cell>
          </Grid>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "55px"
          }}
        >
          {" "}
          <Timer timeout={25} pause={this.state.pauseTimer} />
        </div>
        <Dialog
          style={{
            textAlign: "center",
            background: `url(${time}) center / cover`,
            minHeight: "200px"
          }}
          open={this.state.openDialogWait}
        />

        <ResultDialog
          score="5"
          correct={this.state.openDialogCorrect}
          wrong={this.state.openDialogWrong}
        />
      </Layout>
    );
  }
}
