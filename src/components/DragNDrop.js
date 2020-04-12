import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import '../app.css';
export default class DragNDrop extends Component {
    state = {
        items: [
            { strokeColor: "green", filledColor: 'Red' },
            { strokeColor: "green", filledColor: 'Yellow' },
        ]
    }
    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDragStart = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    onDrop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Grid container spacing={1}>
                    <Grid item xs={8} >
                        <div className="left-cont">
                            {this.state.items.map((val, ind) => {
                                return (
                                    <React.Fragment>
                                        <div draggable="true" onDragStart={(e) => this.onDragStart(e)} id={ind} key={ind} className="sub-parent">
                                            <svg width="100" height="100" id={ind}  >
                                                <circle cx="50" cy="50" r="40" stroke={val.strokeColor} strokeWidth="2" fill={val.filledColor} />
                                                Sorry, your browser does not support inline SVG.
                                            </svg>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                            }
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="rigth-cont" onDragOver={(e) => this.onDragOver(e)} onDrop={(e) => { this.onDrop(e) }} id="div2">Available Destination</div>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}
