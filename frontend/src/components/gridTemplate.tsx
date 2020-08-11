import React, { PureComponent } from 'react'
import Tiles from './ProjectTile'

export default class gridTemplate extends PureComponent {
    render() {
        return (
            <div className="grid grid-cols-6 pt-32 col-gap-2 row-gap-12">
                <Tiles/>
                <Tiles/>
                <Tiles/>
                <Tiles/>
                <Tiles/>
                <Tiles/>
                <Tiles/>
                <Tiles/>
                <Tiles/>
            </div>
        )
    }
}
