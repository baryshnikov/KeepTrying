/**
 * Created by Dimas on 17.12.2016.
 */
import React from 'react'

class Images extends React.Component {
    constructor() {
        super()
        this.state = {
            ImgOnTop: {},
            ImgList: [{FirstPic: {Value: '', Thumb: '', Name: ''}}]
        }
    }

    handleMap() {
        let List = this.state.ImgList
        let ListMap = List.map((item, index) => {
                console.log(item)
                return <div>10000000</div>
            }
        )
     return <div>{ListMap}</div>}

    render() {
        return <div>1000</div>
    }
}
export default Images