import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm } from 'react-hook-form';
import {connect} from "react-redux";

function AddLevelModal({handleModal, toggle, saveLevel, edit, setEdit, editLevel}) {
    const { handleSubmit, register, setValue, reset } = useForm();
    if (edit) {
        setValue('nomi', edit.nomi);
        setValue('bonus', edit.bonus);
    }

    const submit = (data) => {
        if (edit) {
            editLevel({...data, id: edit.id})
            reset();
            setEdit('');
            toggle();
        }else {
            saveLevel(data);
            reset();
            toggle();
        }
    }

    return(
        <Modal isOpen={handleModal} toggle={toggle}>
            <ModalHeader>
                Daraja qo'shish
            </ModalHeader>
            <ModalBody>
                <form onSubmit={handleSubmit(submit)} id={'form'}>
                    <input
                        {...register('nomi', {required: true})}
                        type="text"
                        className={'form-control mb-4'}
                        placeholder={'Nomi'}
                    />
                    <input
                        {...register('bonus', {required: true})}
                        type="text"
                        className={'form-control mb-4'}
                        placeholder={'Bonus'}
                    />
                </form>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={()=> {
                        reset()
                        setEdit();
                        toggle();
                    }}
                    className={'btn btn-dark'}> Chiqish
                </button>
                <button form={'form'} className={'btn btn-primary'}> Saqlash </button>
            </ModalFooter>
        </Modal>
    )
}

function mapDispatchToProps(dispatch){
    return {
        saveLevel: (data)=> {
            dispatch({type: 'ADD_LEVEL', payload: data})
        },
        editLevel: (data)=> {
            dispatch({type: 'EDIT_LEVEL', payload: data})
        }
    }
}

export default connect(null, mapDispatchToProps) (AddLevelModal);