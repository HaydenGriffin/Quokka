import React, { PureComponent } from 'react'
import CreateButton from './Button';

export default class PageTitleHeader extends PureComponent {
    render() {
        return (
            <div className="flex align-center">
                <h1 className="text-6xl font-bold">Projects</h1>
                <CreateButton/>
            </div>
        )
    }
}
