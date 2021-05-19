import { FiberManualRecord, Info } from '@material-ui/icons'
import React from 'react'
import './Widgets.css'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleleft" >
                <FiberManualRecord />
            </div>
            <div className="widgets__articleright" >
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )



    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle("PAPA React si the best", "Top News -- 9099 readers")}
            {newsArticle("Coronavirus: UK updates", "Top News -- 886 readers")}
            {newsArticle("Bitcoin hit alltime highs", "Crypto -- 8000 readers")}
            {newsArticle("Is Redux too good", "Code -- 123 readers")}
            {newsArticle("Tesla hits new highs", "Cars & Auto -- 300 readers")}
        </div>

    )
}

export default Widgets
