import { Injectable, Injector } from '@angular/core';
import { BaseService } from './base.service';
import { Session, Scenario, Media, Question, QuestionFeature, Answer } from '../model/all.model'

@Injectable({
  providedIn: 'root'
})
export class HelpmateService extends BaseService {

  constructor(injector: Injector) {
    super(injector);
  }

/*   getUser(loginDTO: LoginDTO): Promise<User> {
    const url = this.baseURL + '/user/details';
    return this.baseHttp.post<User>(url, loginDTO).toPromise();
  } */

  getSessionFlow() : Promise<Session> {
    /* const url = this.baseURL + '/user/details';
    return this.baseHttp.post<Session>(url, loginDTO).toPromise(); */

     return new Promise((resolve,reject) => {
           // do some async task
           var session : Session = new Session();
           var scenario : Scenario = new Scenario();
           var scenario1 : Scenario = new Scenario();
           var questionList = [];
           var scenarios = [];
           var media = new Media();

           scenario.desc = "Scenario1";
           scenario1.desc = "Scenario2";
           scenario.media = media;
           scenario1.media = media;
           media.transcript = "transcript";
           media.type = "video";
           media.url = "https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ";

           scenario.order = 0;


           var question : Question = new Question();
           question.desc = "How are you doing?";
           question.answers = [];
           var ans1 : Answer = new Answer();
           ans1.id = 1;
           ans1.answer = "Ok";
           var ans2 : Answer = new Answer();
           ans2.id = 2;
           ans2.answer = "Not Ok";

           question.answers.push(ans1);
           question.answers.push(ans2);


           scenario.questionList = questionList;
           questionList.push(question);


           scenarios.push(scenario);

           session.scenarios = scenarios;

           resolve(session);
        });
  }
}
