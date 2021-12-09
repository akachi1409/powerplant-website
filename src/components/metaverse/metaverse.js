import React from "react";

import "./metaverse.css"
class Metaverse extends React.Component {
    render() {
        return (
            <div style={{}}className="metaverse_layout">
                <div className="metaverse_section">
                    <div className="metaverse_left_bar" >
                        <p className="metaverse_left_title">The Metaverse.</p>
                        <p className="metaverse_left_title">The next chapter.</p>
                    </div>
                    <div className="metaverse_right_bar">
                        <p className="metaverse_right_text">
                            GROWTH <text style={{ fontStyle: "italic" }}>~noun </text><br/>a stage or condition in increasing, developing, or maturing

                        </p>
                        <p className="metaverse_right_text">
                            We weren't meant to stay here forever. The next chapter starts with us.
                        </p>

                    </div>
                </div>

            </div>
        )
    }
}

export default Metaverse;