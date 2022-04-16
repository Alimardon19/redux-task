import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from "react-hook-form";
import {connect} from "react-redux";

function XodimModal({handleModal, toggle, AddUser, edit, setEdit, EditUser, lavozimSelect, daraja}) {

    const { register, handleSubmit, setValue, reset } = useForm();

    if (edit) {
        setValue('name', edit.name);
        setValue('surname', edit.surname);
        setValue('phone', edit.phone);
        setValue('position', edit.position);
        setValue('level', edit.level);
    }

    const submit = (data) => {
        if (edit) {
            EditUser({...data, id: edit.id});
            reset();
            setEdit('');
            toggle();
        }else {
            AddUser(data)
            reset();
            setEdit('');
            toggle();
        }
    }
    return(
        <Modal isOpen={handleModal} toggle={toggle}>
            <ModalHeader>
                {edit ? "Xodimni o'zgartirish" : "Xodim qo'shish"}
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(submit)} id={'form'}>
                    <input {...register("name", {required: true})} type="text" placeholder={'Ism'} className={'form-control mb-3'}/>
                    <input {...register("surname", {required: true})} type="text" placeholder={'Familiya'} className={'form-control mb-3'}/>
                    <input {...register("phone", {required: true})} type="text" placeholder={'Telefon'} className={'form-control mb-3'}/>

                    <select {...register("position", {required: true})} className={'form-control mb-3'}>
                        {
                            daraja.map((item, index)=> (<option key={index} value={item.nomi}> {item.nomi} </option>))
                        }
                    </select>
                    <select {...register("level", {required: true})} className={'form-control mb-3'}>
                        {
                            lavozimSelect.map((item, index)=> (<option value={item.nomi} key={index}> {item.nomi} </option> ))
                        }
                    </select>
                </form>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={()=> {
                        reset();
                        setEdit('');
                        toggle();
                    }}
                    className={'btn btn-dark'}
                >
                    Chiqish
                </button>
                <button form={'form'} className={'btn btn-primary'}> Saqlash </button>
            </ModalFooter>
        </Modal>
    )
}

function mapStateToProps(state){
    return {
        lavozimSelect: state.LavozimReducer.lavozimlar,
        daraja: state.DarajaReducer.daraja
    }
}


function mapDispatchToProps(dispatch) {
    return {
        AddUser: (data) => {
            dispatch({type: 'ADD', payload: data})
        },
        EditUser: (data) => {
            dispatch({type: "EDIT", payload: data})
        }
    }
}

const c = connect(mapStateToProps, mapDispatchToProps)

export default c(XodimModal);