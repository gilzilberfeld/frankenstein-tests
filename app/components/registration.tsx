"use client";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { Validator } from "./validator";
import { Details } from "./details";

interface RegistrationProps {
  onRegister(info: Details, promotions: boolean): void;
}

export const PROMOTION_TEXT = "I want to get promotions too!";
export const TERMS_TEXT = "I have read the whole term sheet and agree";
export const ERROR_MESSAGE = 'Please make sure all fields are filled correctly.';
export default function Registration(props: RegistrationProps) {
  const [withPromotions, setPromotions] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [details, setDetails] = useState(new Details());
  const [iserror, setError] = useState(false)

  const notify = props.onRegister;

  function handlePromotionsCheck(event: SyntheticEvent<Element, Event>, checked: boolean): void {
    setPromotions(checked);
  }

  function handleAgreeTerms(event: SyntheticEvent<Element, Event>, checked: boolean): void {
    setAgreeTerms(checked);
  }

  function handleRegister(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    try{
        Validator.validateDetails(details);
        notify(details, withPromotions);
    }
    catch (e){
        setError(true)    
    }
  }

  function handleFirstName(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setDetails({ ...details, firstName: event.target.value });
    setError(false)
  }

  function handleLastName(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setDetails({ ...details, lastName: event.target.value });
    setError(false)
  }

  function handleEmail(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setDetails({ ...details, email: event.target.value });
    setError(false)
  }


  return (
    <div className="bg-white m-4">
      <Box
        component="section"
        sx={{
          p: 1,
          bgcolor: "#6F6F6F",
          border: "1px dashed black",
          borderRadius: 2,
          m: 1,
        }}
      >
        <div className="flex flex-col p-2">
          <div className="flex flex-row space-x-2">
            <TextField className="bg-white rounded-md" required name="first_name" label="First Name" placeholder="First Name" value={details.firstName} onChange={handleFirstName} />
            <TextField className="bg-white rounded-md" required id="last_name" label="Last Name" placeholder="Last Name" onChange={handleLastName} />
          </div>
        </div>
        <div className="p-2">
          <TextField className="bg-white rounded-md" required id="email" label="Email" placeholder="Email" onChange={handleEmail} />
        </div>
        <FormGroup className="p-2">
          <FormControlLabel control={<Checkbox checked={withPromotions}/>} label={PROMOTION_TEXT} onChange={handlePromotionsCheck}/>
          <FormControlLabel control={<Checkbox checked={agreeTerms} />} label={TERMS_TEXT} onChange={handleAgreeTerms}/>
        </FormGroup>
        <div className="p-2 flex flex-row justify-end">
          <Button variant="contained" disabled={!agreeTerms} onClick={handleRegister}>
            Register
          </Button>
        </div>
      </Box>
      <div>
        {iserror && <label className="text-red-800 p-2 m-2">{ERROR_MESSAGE}</label>}
      </div>
    </div>
  );
}
