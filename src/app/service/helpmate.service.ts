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

  getSessionFlow() : Promise<Session> {


     return new Promise((resolve,reject) => {
           // do some async task
           var session : Session = new Session();

           var scenario : Scenario = new Scenario();
           var scenario1 : Scenario = new Scenario();
           var questionList = [];
           var scenarios = [];
           var media = new Media();

           scenario.desc = "Scenario 1 description";
           scenario1.desc = "Nullam aliquet lacus eu justo euismod finibus. Suspendisse non nibh elit. Etiam id rhoncus mi, in fermentum risus. Curabitur metus enim, congue eget neque at, egestas congue orci.";
           scenario.media = media;
           scenario1.media = media;
           media.transcript = "An opportunity arises for a promotion in your department. You ask for more details of what it will entail. After hearing what would be required of candidates, you decide that if you applied for the job, you would be  successful\n\n";
           media.type = "video";
           media.url = "https://player.vimeo.com/external/299108946.hd.mp4?s=b9a7cc9e6dbb18367250a9c8ddef4e5fe800bb99&profile_id=175&oauth2_token_id=57447761";

           scenario.order = 0;


           var question : Question = new Question();
           question.desc = "Does your friend like what you have done?";
           question.answers = [];
           var ans1 : Answer = new Answer();
           ans1.id = 1;
           ans1.answer = "Yes";
           var ans2 : Answer = new Answer();
           ans2.id = 2;
           ans2.answer = "No";

           question.answers.push(ans1);
           question.answers.push(ans2);

           scenario.questionList = questionList;
           scenario1.questionList = questionList;
           questionList.push(question);

           scenarios.push(scenario);
           scenarios.push(scenario1);
           scenarios.push(scenario1);
           scenarios.push(scenario1);
           scenarios.push(scenario1);
           scenarios.push(scenario1);
           scenarios.push(scenario1);

           session.scenarios = scenarios;

           resolve(session);
        });
  }
}
