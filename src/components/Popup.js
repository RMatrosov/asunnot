import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox, FormControlLabel, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useState} from "react";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {setBids, setSuccess} from "../state/action-creator/bids";
import Swal from "sweetalert2";


const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

const schema = yup.object().shape({
  name: yup.string().matches(/^([^0-9]*)$/, "Name should not contain numbers")
      .required("Name is a required field"),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),

});


export default function Popup({closePopup, card}) {

  const dispatch = useDispatch();

  const {success} = useSelector(({bids}) => bids);

  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    dispatch(setBids(JSON.stringify(data)));
  }

  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const popupIsOpen = useSelector(({popup}) => popup.popupIsOpen)

  if (success) {
    closePopup()
    Swal.fire("Thank you!", "We will contact you", "success");
    dispatch(setSuccess(false))
  }

  return (

            <div className={popupIsOpen ? 'modal-wrapper' : ''}>
              <div className={popupIsOpen ? 'modal__opened' : 'modal'}>
                <Button
                    onClick={closePopup}
                    style={{
                      right: 0,
                      position: 'absolute', width: 100, padding: 0
                    }}
                    variant="contained"
                    color="secondary">
                  close | X
                </Button>
                <div className="modal__header">
                  <div className="modal__title">
                    Заявка на бронирование
                  </div>
                  <div className="modal__details">
                    Квартира <span>{card.square}</span> в Первом квартале Дом 5
                    <div className="modal__details-art">{card.scu}</div>
                  </div>
                </div>
                <form className="modal__form" noValidate onSubmit={handleSubmit(onSubmit)}>
                  <div className="modal__form-content">
                    <TextField
                        margin="normal"
                        type="text"
                        name="name"
                        id="name"
                        label="Name"
                        placeholder="Your name"
                        multiline
                        variant="outlined"
                        error={!!errors.name}
                        helperText={errors?.name?.message}
                        {...register("name", {
                          required: "Required",
                        })}
                        fullWidth
                    />

                    <TextField
                        placeholder="Your phone number"
                        multiline
                        variant="outlined"
                        id="phoneNumber"
                        type="tel"
                        label="Phone Number"
                        name="phone"
                        error={!!errors.phone}
                        helperText={errors?.phone?.message}
                        fullWidth
                        {...register("phone", {
                          required: "Required",
                        })}
                    />

                  </div>
                  <FormControlLabel
                      control={
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            color="primary"
                            name="checkbox"
                            inputProps={{'aria-label': 'secondary checkbox'}}
                        />}
                      label="check this for submit"
                  />
                  <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={!checked}
                      style={{alignSelf: "center", height: 60}}
                      size='large'
                  >Submit</Button>
                </form>
              </div>
            </div>

  )
}
