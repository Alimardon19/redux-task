import React, {useState} from 'react';
import AddLevelModal from "./component/addLevel";
import {connect} from "react-redux";

function Daraja({darajalar, deleteLevel}) {

    const [search, setSearch] = useState('');
    const [edit, setEdit] = useState('');
    const [handleModal, setHandleModal] = useState(false);

    const toggle = () => setHandleModal(prev => !prev);

    const startEditLevel = data => {
        setEdit(data);
        toggle();
    }

    return(
        <div>
            <div className={'navs'}>
                <input type="text" placeholder={'Search'} onChange={(e)=> setSearch(e.target.value)}/>
                <h1> Darajalar </h1>
                <button onClick={toggle}> + Add </button>
            </div>
            <table className={'table mt-5 table-hover'}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nomi</th>
                    <th>Bonus</th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    darajalar.filter((e) => {
                        if (e.nomi) {
                            return e.nomi.toLowerCase().indexOf(search.toLowerCase()) > - 1
                        }
                        return () => e;
                    }).map((item, index)=> <tr key={index}>
                        <td> {index + 1} </td>
                        <td> {item.nomi} </td>
                        <td> {item.bonus} </td>
                        <td>
                            <i className="bi bi-pencil-fill h4" onClick={()=> startEditLevel(item)} > </i>
                            <i className="bi bi-trash-fill h4" onClick={()=> deleteLevel(index)}> </i>
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
            <AddLevelModal
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
        darajalar: state.DarajaReducer.daraja
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteLevel: (id)=> {
            dispatch({type: 'DELETE_LEVEL', payload: id})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Daraja);