import { Fragment } from 'react';

const PageHeader = ({header}) => {
    
    return (
        <Fragment>
            <h1>
                {header}
            </h1>
        </Fragment>
    )
}

export default PageHeader;