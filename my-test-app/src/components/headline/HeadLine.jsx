import { render } from '@testing-library/react';
import React from 'react';

type Props = {
    header: string,
    description: string,
}
type State = {}

class HeadLine extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }
    render() {
        const { header, description } = this.props;

        if (!header) {
            return null;
        }
        return (
            <div data-test="header-line">
                <h1 data-test="header">{header}</h1>
                <p data-test="description">{description}</p>
            </div>
        )
    }
}
export default HeadLine;