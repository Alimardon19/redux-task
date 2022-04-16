import React, {useState} from 'react';
import AddModal from './component/addModal';
import {connect} from "react-redux";


function Lavozim({lavozimlar, DeletePosition}) {
    const [search, setSearch] = useState('');
    const [edit, setEdit] = useState('');
    const [handleModal, setHandleModal] = useState(false);
    const toggle = () => setHandleModal(prev => !prev);
    const Delete = data => DeletePosition(data);

    const startEdit = (data) => {
        toggle();
        setEdit(data)
    }

    return(
        <div>
            <div className={'navs'}>
                <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder={'Search'}/>
                <h1> Lavozimlar </h1>
                <button onClick={toggle}> + Add </button>
            </div>
            <table className={'table mt-5 table-hover'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nomi</th>
                    <th>Maosh</th>
                    <th>  </th>
                </tr>
                </thead>
                <tbody>
                {
                    lavozimlar.filter((e)=> {
                        if (e.nomi) {
                            return e.nomi.toLowerCase().indexOf(search.toLowerCase()) > - 1
                        }
                        return ()=> e;
                    }).map((item, index)=> <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.nomi}</td>
                        <td>{item.maosh}</td>
                        <td>
                            <i className="bi bi-pencil-fill h4" onClick={()=> startEdit(item)} > </i>
                            <i className="bi bi-trash-fill h4" onClick={()=> Delete(index)}> </i>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
            <AddModal
                handleModal={handleModal}
                toggle={toggle}
                edit={edit}
                setEdit={setEdit}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        lavozimlar: state.LavozimReducer.lavozimlar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        DeletePosition: (data)=> {
            dispatch({type: 'DELETE_POSITION', payload: data})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Lavozim);