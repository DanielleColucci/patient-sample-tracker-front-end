/* ---------===== custom props ====--------- */

export interface Sample {
  id: number; 
  MRN: number; 
  date: string;
  cellLine: string;
  PDXModel: string;
  profileId: number | Profile;
}

/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  samples: Sample[];
  createdAt: string;
  updatedAt: string;
  userId: number;
  user?: User;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
  authorized: boolean;
  admin: boolean;
}
