import { connect } from "react-redux";
import MasteryPanel from "../components/MasteryPanel";

const mapStateToProps = (state) => {
    return {
        className: state.render.show == "PLAYER_STATS" ? "show" : "hide",
        championData: state.info.data,
    };
}

const ChampionMasteryPanel = connect(mapStateToProps)(MasteryPanel);

export default ChampionMasteryPanel;