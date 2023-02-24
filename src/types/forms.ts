import { Profile } from "./models";

/* ---------==== custom forms ====--------- */

export interface SampleFormData {
  MRN: number | undefined; 
  date: string;
  sampleNumber: string;
  cellLine: string;
  PDXModel: string;
  id?: number;
  Profile?: Profile;
  createdAt?: string;
  updatedAt?: string;
  profileId?: number;
}

/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
