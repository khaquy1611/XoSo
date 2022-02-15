import React, { useState, useEffect } from "react";
import MasterLayout from "../components/Layout";
import { Row , Col ,  notification } from 'antd';
import Swal from 'sweetalert2';
import styles from '../pages/css/ResetPassWord.module.css';
import { Link } from 'react-router-dom';
function SignIn() {
  const [validate , setValidate ] = useState({
    passWord: '',
  });
  const [errors , setErrors] = useState({
    passWord: '',
  });

  const handleChangeValue = (e) => {
    let { name, value, type } = e.target;
    let newValues = {...validate , [name] : value};
    let newErrors = {...errors};

    if(value.trim() === "") {
        newErrors[name] = name + " is required ";
    }else {
        newErrors[name] = "";
    }
    if (name === 'passWordConfirm') {
        if(value === newValues['passWord']){
            newErrors[name] = '';
        }else {
            newErrors[name] = name + ' is invalid ';
        }
    }
    setValidate(newValues);
    setErrors(newErrors);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      let valid = true;
      let SignUpContent = '';
      let errorsContent = '';
      for (let key in validate) {
        if (validate[key] === '') {
            valid = false;
            errorsContent += `
            <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
            valid = false;
        }

        SignUpContent += `
            <p class="text-left"> <b>${key}:</b> ${validate[key]}</p>
        `
    }

    for (let key in errors) {
        if (errors[key] !== '') {
            errorsContent += `
            <p class="text-left"> <b class="text-danger">${key} is invalid!</b></p>`;
            valid = false;
        }


    }

    if(!valid) {
        Swal.fire({
            title: 'Your profile!',
            html: errorsContent,
            icon: 'error', //success, error, warning, question
            confirmButtonText: 'OK'
        })
        console.log("thất bại");
        return;
       
    }
    console.log("thành công");
    // alert('Thành công!')
    Swal.fire({
        title: 'Your profile!',
        html: SignUpContent,
        icon: 'success', //success, error, warning, question
        confirmButtonText: 'OK'
    })
  }
  return (
    <MasterLayout>
       <Row className={styles.main}>
        <div className={styles.containerSignUp}>
        <h3 className={styles.text}>Lấy Lại Mật Khẩu</h3>
            <form onSubmit = {(e) => handleSubmit(e) } method ="POST" action="" className={styles.form}>
            <input type="hidden" name="_token" value="" />
            <div className={styles.row}>
                <div className={styles.col4}>
                    <label>Nhập Mật Khẩu  Khôi Phục</label>
                </div>
                <div className={styles.col7}>
                    <input type="password" name="password" id="password" onChange={(e)=> handleChangeValue(e)}  value={validate.password} require autofocus />
                    <span className={styles.textDanger}>{errors.password}</span>
                </div> 
               
            </div>
            <button  className={styles.btn} type="danger" shape="round" size="large" >Send PassWord Reset Link</button>
            </form>
        </div>
        </Row>
    </MasterLayout>
  );
}

export default React.memo(SignIn);
