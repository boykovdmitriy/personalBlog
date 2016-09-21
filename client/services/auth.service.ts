/**
 * Created by boiko on 9/22/2016.
 */
import {Injectable} from "@angular/core";
import { RequestService } from "./request.service";
import { Observable } from "rxjs";
import { IUserModel } from "../model/user.model";

@Injectable()
export class AuthService{
	constructor(private requestService:RequestService){}

	singIn(user:IUserModel):Observable<any>{
		return this.requestService.post<IUserModel>('/signin',user);
	}

	authentification(user:IUserModel):Observable<any>{
		return this.requestService.post<IUserModel>('/authenticate',user);
	}
}