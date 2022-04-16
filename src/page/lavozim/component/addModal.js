import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {connect} from "react-redux";

function AddModal({handleModal, toggle, addPosition, editPosition, edit, setEdit}) {
    const {handleSubmit, register, reset, setValue} = useForm();

    if (edit) {
        setValue('nomi', edit.nomi);
        setValue('maosh', edit.maosh);
    }

    const submit = data => {
        if (edit) {
            editPosition({...data, id: edit.id});
            reset();
            setEdit('');
            toggle();
        }else {
            addPosition(data);
            reset();
            toggle();
        }
    }
    return(
        <Modal isOpen={handleModal} toggle={toggle}>
            <ModalHeader>
                {edit ? "Lavozimni o'zgartirish" : "Lavozim qo'shish"}
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(submit)} id={'form'}>
                    <input
                        {...register('nomi', {required: true})}
                        type="text"
                        placeholder={"Nomi"}
                        className={'form-control mb-4'}
                    />
                    <input
                        {...register('maosh', {required: true})}
                        type="text"
                        placeholder={"Maosh"}
                        className={'form-control mb-4'}
                    />
                </form>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={()=> {
                        reset();
                        setEdit('');
                        toggle();
                    }}

                    className={'btn btn-dark'}>Chiqish</button>
                <button form={'form'} className={'btn btn-primary'}>Saqlash</button>
            </ModalFooter>
        </Modal>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addPosition: (data) => {
            dispatch({type: "ADD_POSITION", payload: data})
        },
        editPosition: (data) => {
            dispatch({type: 'EDIT_POSITION', payload: data})
        }
    }
}

export default connect(null, mapDispatchToProps) (AddModal);