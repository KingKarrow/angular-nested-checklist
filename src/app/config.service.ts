import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { INestedChecklistNode } from './nested-checklist-node';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private _http: HttpClient) { }

  getChecklistConfig(): Observable<INestedChecklistNode[]> {
    // Replace with an HttpClient Get if you want to use an external file!
    return this._http.get<any>('./assets/config/config.json').pipe(
      map(data => this.getChecklistNodes(data))
    );
    // return of<INestedChecklistNode[]>(this.configPlaceholder['checklist']);
  }

  getChecklistNodes(data: any): INestedChecklistNode[] {
    if (data === undefined || data['checklist'] === undefined) return [] as INestedChecklistNode[];

    let checklist = data['checklist'] as any[];
    if (checklist[0] && checklist[0]['name'] && checklist[0]['checked'] !== undefined) {
      return checklist as INestedChecklistNode[];
    } else {
      return [] as INestedChecklistNode[];
    }
  }

  configPlaceholder: { checklist: INestedChecklistNode[] } = {
    "checklist": [
      {
        "name": "Big task",
        "checked": false,
        "children": [
          {
            "name": "Smaller task",
            "checked": false,
            "children": [
              {
                "name": "Smaller smaller task",
                "checked": false,
                "children": [
                  {
                    "name": "Head shape",
                    "checked": false
                  },
                  {
                    "name": "Face",
                    "checked": false,
                    "children": [
                      {
                        "name": "Eyes",
                        "checked": false,
                        "children": [
                          {
                            "name": "Eye sockets",
                            "checked": false
                          },
                          {
                            "name": "Eyeballs",
                            "checked": false
                          },
                          {
                            "name": "Eyebrows",
                            "checked": false
                          },
                          {
                            "name": "Nasal bone",
                            "checked": false
                          }
                        ]
                      },
                      {
                        "name": "Mouth",
                        "checked": false,
                        "children": [
                          {
                            "name": "Teeth",
                            "checked": false
                          },
                          {
                            "name": "Tongue",
                            "checked": false
                          },
                          {
                            "name": "Lips",
                            "checked": false
                          }
                        ]
                      },
                      {
                        "name": "Nose",
                        "checked": false
                      },
                      {
                        "name": "Facial hair",
                        "checked": false
                      }
                    ]
                  },
                  {
                    "name": "Ears",
                    "checked": false
                  }
                ]
              },
              {
                "name": "Torso",
                "checked": false,
                "children": [
                  {
                    "name": "Chest",
                    "checked": false
                  },
                  {
                    "name": "Shoulders/shoulderblades",
                    "checked": false
                  },
                  {
                    "name": "Belly",
                    "checked": false
                  },
                  {
                    "name": "Back",
                    "checked": false
                  }
                ]
              },
              {
                "name": "Arms",
                "checked": false,
                "children": [
                  {
                    "name": "Hands",
                    "checked": false
                  }
                ]
              },
              {
                "name": "Legs",
                "checked": false,
                "children": [
                  {
                    "name": "Feet",
                    "checked": false
                  }
                ]
              },
              {
                "name": "Hips",
                "checked": false,
                "children": [
                  {
                    "name": "Butt",
                    "checked": false
                  }
                ]
              }
            ]
          },
          {
            "name": "Clothes",
            "checked": false,
            "children": [
              {
                "name": "Shirt",
                "checked": false
              },
              {
                "name": "Pants",
                "checked": false
              },
              {
                "name": "Shoes",
                "checked": false,
                "children": [
                  {
                    "name": "Pair One",
                    "checked": false
                  },
                  {
                    "name": "Pair Two",
                    "checked": false
                  },
                  {
                    "name": "Pair Three",
                    "checked": false
                  }
                ]
              },
              {
                "name": "Necklace",
                "checked": false
              },
              {
                "name": "Gloves",
                "checked": false
              }
            ]
          }
        ]
      }
    ]
  };
}
