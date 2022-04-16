import React, {useState} from 'react';
import {connect} from "react-redux";
import XodimModal from "./component/xodimModal";

function Xodim({Xodim, deleteUser}) {
    const [handleModal, setHandleModal] = useState(false);
    const [edit, setEdit] = useState('');
    const [search, setSearch] = useState('');

    const toggle = () => setHandleModal( prev => !prev);
    const startEdit = data => {
        setEdit(data)
        toggle()
    }
    const DeleteUser = id => deleteUser(id);

    return(
        <div className={'xodim'}>
            <div className={'navs'}>
                <input type="text" placeholder={"Search"} onChange={(e)=> setSearch(e.target.value)} />
                <h1> Xodimlar </h1>
                <button onClick={toggle}> + Add </button>
            </div>
            <table className={'table mt-5 table-hover'}>
                <thead>
                <tr>
                    <th> # </th>
                    <th> Ism </th>
                    <th> Familiya </th>
                    <th> Telefon </th>
                    <th> Lavozim </th>
                    <th> Ilmiy daraja </th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    Xodim.filter((e) => {
                        if (e.name) {
                            return e.name.toLowerCase().indexOf(search.toLowerCase()) > - 1;
                        }
                        return ()=> e;
                    }
                    ).map((item, index)=> <tr key={index}>
                        <td> {index + 1} </td>
                        <td> {item.name} </td>
                        <td> {item.surname} </td>
                        <td> {item.phone} </td>
                        <td> {item.position} </td>
                        <td> {item.level} </td>
                        <td>
                            <i className="bi bi-pencil-fill h4" onClick={()=> startEdit(item)}> </i>
                            <i className="bi bi-trash-fill h4" onClick={()=> DeleteUser(index)} > </i>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
            <XodimModal
                edit={edit}
                setEdit={setEdit}
                handleModal={handleModal}
                toggle={toggle}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        Xodim: state.XodimReducer.xodimlar,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteUser: (id)=> {
            dispatch({type: 'DELETE_USER', payload: id})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Xodim);