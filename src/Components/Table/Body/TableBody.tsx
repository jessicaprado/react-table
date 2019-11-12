import React from "react";

interface Props {
    fillerData: any[]
}

class TableBody extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        const {fillerData} = this.props;

        return(
            <tbody>
                {fillerData.map((rows, i) => {
                    return (
                        <tr key={i}>
                            {Object.values(rows).map((data:any, j) => {
                                return(
                                   <td align="center" key={j}>{data}</td>
                                )
                            })}
                            
                        </tr>
                    )
                })}
            </tbody>
        )
    }
}

export default TableBody