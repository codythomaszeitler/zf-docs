export const ZEITLERFORCE_HEADER_HEIGHT = 50;

export function ZeitlerforceHeader() {
    return (<div style={{
        position: 'sticky',
        top: 0,
        height: 50,
        backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'space-between'
    }}>
        <button style={{
            marginLeft: 10,
            marginRight: 10
        }}>ZeitlerForce</button>
        <button style={{
            marginLeft: 10,
            marginRight: 10
        }}>Documentation</button>
    </div>)
}