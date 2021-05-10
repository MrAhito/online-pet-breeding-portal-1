import React, { useRef, useState } from 'react'
import * as faIcons from 'react-icons/fa'
import {  useHistory } from "react-router-dom";
import fireBaseDB, { auth } from '../firebase/firebase';
function RegUserForm() {
    const history = useHistory();

    const fnameRef = useRef();
    const lnameRef = useRef();
    const regEmRef = useRef();
    const regAdRef = useRef();
    const regPaRef = useRef();
    const conRef = useRef();
    const bdateRef = useRef();
    const genRef = useRef();
    const cusGRef = useRef();
    const petNameRef = useRef();
    const petDateRef = useRef();
    const petGenderRef = useRef();
    const petSpeciRef = useRef();
    const petBreedRef = useRef();
    const petWeightRef = useRef();
    const petHeightRef = useRef();
    const hiddenFileInput = useRef(null);
    const hiddenFileInput2 = useRef(null);
    
    const [dpImg, setdpImg] = useState('https://www.shareicon.net/data/256x256/2017/02/15/878685_user_512x512.png');
    const [petImg, setpetImg] = useState('https://res.cloudinary.com/pet-breeding/image/upload/v1620600697/b5arwppmaihcbukxdzin.png');

    const [cgend, setcgend] = useState(false);
    const [errFName, setFName] = useState(false);
    const [errLName, setLName] = useState(false);
    const [errRegEm, setRegEm] = useState(false);
    const [errRegAd, setRegAd] = useState(false);
    const [errRegPa, setRegPa] = useState(false);
    const [errCon, setCon] = useState(false);
    const [errBday, setBday] = useState(false);
    const [errGen, setGen] = useState(false);
    const [errPName, setPName] = useState(false);
    const [errPDate, setPDate] = useState(false);
    const [errPSpec, setPSpec] = useState(false);
    const [errPBred, setPBred] = useState(false);
    const [errPGend, setPGend] = useState(false);
    const [errCGen, setCGen] = useState(false);
    const [errPWeight, setPWeight] = useState(false);
    const [errPHeight, setPHeight] = useState(false);
    const [showPet, setshowPet] = useState(true);
    const petSHow = () => setshowPet(!showPet);

    const cGend = (e) => {
        const selVal = e.target.value;
        if (selVal === "custome") {
            setcgend(true);
        } else {
            setcgend(false);
        }
    }


    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Address, setAddr] = useState("");
    const [BirthDate, setBDate] = useState("");
    const [PassWord, setPWord] = useState("");
    const [Contact, setContact] = useState("");
    const [Email, setEmail] = useState("");
    const [Gender, setGender] = useState("");
    const [PetName, setPetName] = useState("");
    const [PetBDate, setPBdate] = useState("");
    const [PetSpec, setPetSpec] = useState("");
    const [PetBreed, setPetBreed] = useState("");
    const [PetGend, setPetGend] = useState("");
    const [PetsWeight, setPetsWeight] = useState("");
    const [PetsHeight, setPetsHeight] = useState("");

    const signUp = (e) =>{
        const petName = petNameRef.current.value;
        const petDate = petDateRef.current.value;
        const petSpeci = petSpeciRef.current.value;
        const petBreed = petBreedRef.current.value;
        const petGender = petGenderRef.current.value;
        const petWeight = petWeightRef.current.value;
        const petHeight = petHeightRef.current.value;
    
        if (petName.replace(/\s/g, "").length <= 0) {
            setPName(true);
        } else {
            setPName(false);
            setPetName(petName);
        }
        if (petDate.replace(/\s/g, "").length <= 0) {
            setPDate(true);
        } else {
            setPBdate(petDate);
            setPDate(false);
        }
        if (petSpeci.replace(/\s/g, "").length <= 0) {
            setPSpec(true);
        } else {
            setPetSpec(petSpeci);
            setPSpec(false);
        }
        if (petBreed.replace(/\s/g, "").length <= 0) {
            setPBred(true);
        } else {
            setPetBreed(petBreed);
            setPBred(false);
        }
        if (petGender.replace(/\s/g, "").length <= 0) {
            setPGend(true);
        } else {
            setPetGend(petGender);
            setPGend(false);
        }
        if (petWeight.replace(/\s/g, "").length <= 0) {
            setPWeight(true);
        } else {
            setPetsWeight(petWeight);
            setPWeight(false);
        }
        if (petHeight.replace(/\s/g, "").length <= 0) {
            setPHeight(true);
        } else {
            setPetsHeight(petHeight);
            setPHeight(false);
        }

        if(!petNameRef.current.value.replace(/\s/g, "").length <= 0 && !petDateRef.current.value.replace(/\s/g, "").length <= 0 
        && !petSpeciRef.current.value.replace(/\s/g, "").length <= 0 && !petBreedRef.current.value.replace(/\s/g, "").length <= 0
        && !petGenderRef.current.value.replace(/\s/g, "").length <= 0 && !petHeightRef.current.value.replace(/\s/g, "").length <= 0
        && !petWeightRef.current.value.replace(/\s/g, "").length <= 0){
                e.preventDefault();
                auth.createUserWithEmailAndPassword(
                   Email, PassWord
                ).then(user => {
                    if (!user) return;
                    const userRef = fireBaseDB.doc("users/" + auth.currentUser.uid);
                    const pettRef = fireBaseDB.doc("pets/" + auth.currentUser.uid);
                    const snaps = userRef.get();
                
                    if (!snaps.exist) {
                        const {email} = user;
                        const {displayName} = FirstName;
                        const {displayLastName} = LastName;
                        
                        try {
                            userRef.set({

                            
                            });
                            pettRef.set({
                                createdAt: new Date(), PetName, PetBDate, PetSpec, PetBreed, PetGend, PetsWeight, PetsHeight, 

                            });
                    history.push('/dashboard');
                        } catch (error) {
                            console.log("Error in creating user info", error);
                        }
                    }
                }).catch(err => {
                   
                });
            }
        }

    const showError = () => {
        const firstName = fnameRef.current.value;
        const lastName = lnameRef.current.value;
        const regEmail = regEmRef.current.value;
        const regAddress = regAdRef.current.value;
        const regPass = regPaRef.current.value;
        const conNum = conRef.current.value;
        const birthDate = bdateRef.current.value;
        const genDer = genRef.current.value;
        const customGen = cusGRef.current.value;
        if (firstName.replace(/\s/g, "").length <= 0) {
            setFName(true);
        } else {
            setFName(false);
            setFirstName(firstName);
        }
        if (lastName.replace(/\s/g, "").length <= 0) {
            setLName(true);
        } else {
            setLastName(lastName);
            setLName(false);
        }
        if (regEmail.replace(/\s/g, "").length <= 0) {
            setRegEm(true);
        } else {
            setEmail(regEmail);
            setRegEm(false);
        }
        if (regAddress.replace(/\s/g, "").length <= 0) {
            setRegAd(true);
        } else {
            setAddr(regAddress);
            setRegAd(false);
        }
        if (regPass.replace(/\s/g, "").length <= 0) {
            setRegPa(true);
        } else {
            setPWord(regPass);
            setRegPa(false);
        }
        if (conNum.replace(/\s/g, "").length <= 0) {
            setCon(true);
        } else {
            setContact(conNum);
            setCon(false);
        }
        if (birthDate.replace(/\s/g, "").length <= 0) {
            setBday(true);
        } else {
            setBDate(birthDate);
            setBday(false);
        }
        if (genDer.replace(/\s/g, "").length <= 0) {
            setGen(true);
        } else if (genDer === "custome") {
            if (customGen.replace(/\s/g, "").length <= 0) {
                setCGen(true);
            } else {
            setGender(customGen);
            setCGen(false);
            }
        } else {
                setGender(genDer);
            setGen(false);
        }
        if(!fnameRef.current.value.replace(/\s/g, "").length <= 0 && !lnameRef.current.value.replace(/\s/g, "").length <= 0 
        && !regAdRef.current.value.replace(/\s/g, "").length <= 0 && !bdateRef.current.value.replace(/\s/g, "").length <= 0 
        && !regPaRef.current.value.replace(/\s/g, "").length <= 0 && !conRef.current.value.replace(/\s/g, "").length <= 0 
        && !regEmRef.current.value.replace(/\s/g, "").length <= 0 && !genRef.current.value.replace(/\s/g, "").length <= 0 ){
            setshowPet(!showPet);
            console.log(Gender);
        }
    }

    const onUserImg = event => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setdpImg(reader.result);
            }
        }
    reader.readAsDataURL(event.target.files[0])
}

const onPetImg = event => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setpetImg(reader.result);
            }
        }
    reader.readAsDataURL(event.target.files[0])
}
    return (
        <>
            <div className={showPet ? 'reg-form-c show' : 'reg-form-c'} >
                <div>
                    <div className="pet-reg fixs">
                        <div className="pet-title"><h1>User Information </h1></div>
                        <div className='avatarHolder'>
                        <input style={{display: 'none'}} type='file' onChange = {onUserImg} ref={hiddenFileInput}/>
                        <img src={dpImg} alt='Profile' onClick={(e) => {hiddenFileInput.current.click();}}  />
                        </div>

                        <input className='reg_in' type="text" name="txt-Fnme" placeholder='First Name:' ref={fnameRef} id="txtFname" />
                        <div className={errFName ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input  className='reg_in' type="text" name="txt-Lnme" placeholder='Last Name:' ref={lnameRef} id="txtLname" />
                        <div className={errLName ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input  className='reg_in' type="text" name="txt-Emai" placeholder='Email Address:' ref={regEmRef} id="txtEmails" />
                        <div className={errRegEm ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input  className='reg_in' type="text" name="txt-Addr" placeholder='Address:' ref={regAdRef}  id="txtAddr" />
                        <div className={errRegAd ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input className='reg_in'  type="password" name="txt-Pwor" placeholder='Password:' ref={regPaRef} id="txtPword" />
                        <div className={errRegPa ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input className='reg_in'  type="tel" name="txt-Cnum" placeholder='Contact Number:' ref={conRef} id="txtCnum" />
                        <div className={errCon ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input className='reg_in'  type="date" name="txt-Bdate" placeholder='Birth Date:' ref={bdateRef} id="txtBdate" />
                        <div className={errBday ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <select className='reg_in'  name="txt-Gend" onChange={cGend} id="txtGend" ref={genRef} defaultValue={''}>
                            <option value="" disabled>Gender:</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="custome">Custom</option>
                        </select>
                        <div className={errGen ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input  className={cgend ? 'reg_in' : 'reg_in gid'} type="text" name="txt-Gcus" ref={cusGRef} id="txtGcus" placeholder='Please specify:' />
                        <div className={errCGen ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                    </div>
                </div>
                <div className="reg-footer">
                    <button className='btn btn-sub' onClick={showError} >Next</button>
                </div>
            </div>
            <div className={showPet ? 'reg-form-c' : 'reg-form-c show'} >
                <div className='flow-comn'>
                    <div className="pet-reg">
                        <div className="pet-title"><h1>Pet Information </h1></div>

                        <div className='avatarHolder'>
                        <input style={{display: 'none'}} type='file' onChange = {onPetImg} ref={hiddenFileInput2}/>
                        <img src={petImg} alt='Profile' onClick={(e) => {hiddenFileInput2.current.click();}} />
                        </div>

                        <input className='reg_in' type="text" name="txt-Anme" placeholder='Name:'  ref={petNameRef} id="txtAnme" />
                        <div  className={errPName ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                            <input className='reg_in'  type="date" name="txt-PDate" placeholder='Birth Date:' ref={petDateRef} id="txtBdate" />
                            <div className={errPDate ? 'valida sh' : 'valida'}>
                                <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <select className='reg_in' name="txt-Spec" id="txtSpec" ref={petSpeciRef}  defaultValue={''} >
                            <option value=""  disabled>Species:</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                        <div className={errPSpec ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle>
                        </div>
                    <select className='reg_in' name="txt-Bred" id="txtBred" ref={petBreedRef} defaultValue={''} >
                        <option value=""  disabled>Breed:</option>
                        <option value="breed1">Breed 1</option>
                        <option value="breed2">Breed 2</option>
                    </select>
                    <div className={errPBred ? 'valida sh' : 'valida'}>
                        <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle>
                    </div>
                        <select className='reg_in'  name="txt-Gend" id="txtPGend" ref={petGenderRef}  defaultValue={''}>
                            <option className='placeH' value=""  disabled>Gender:</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <div className={errPGend ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input className='reg_in' type="number" name="txt-Weig" placeholder='Weight:(kg)'  ref={petWeightRef} id="txtWeig" />
                        <div  className={errPWeight ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <input className='reg_in' type="number" name="txt-Heig" placeholder='Height:(kg)'  ref={petHeightRef} id="txtHeig" />
                        <div  className={errPHeight ? 'valida sh' : 'valida'}>
                            <faIcons.FaExclamationCircle></faIcons.FaExclamationCircle></div>
                        <div>
                    </div>
                    </div>
                </div>
                <div className="reg-footer petf">
                    <div>
                        <button className='btn btn-sub' onClick={petSHow} >Back</button>
                        <button className='btn btn-sub' onClick={signUp} >Sign Up</button>
                    </div>
                    <div className="termscon">Terms and Conditions</div>
                </div>
            </div>
        </>
    )
}

export default RegUserForm
