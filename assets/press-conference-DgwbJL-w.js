const n=21,e=[[{"->":"opening"},["done",{"#n":"g-0"}],null],"done",{blowout:["ev",{"VAR?":"margin"},17,">=","/ev","~ret",null],tight:["ev",{"VAR?":"margin"},3,"<=","/ev","~ret",null],opening:["ev",{"VAR?":"result"},"/ev",["du","ev","str","^win","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,"ev",{"f()":"blowout"},"/ev",[{"->":".^.b",c:!0},{b:[`
`,"^The room is louder than usual. ","ev",{"VAR?":"clubName"},"out","/ev","^ beat ","ev",{"VAR?":"opponent"},"out","/ev","^ by ","ev",{"VAR?":"margin"},"out","/ev","^ in Week ","ev",{"VAR?":"week"},"out","/ev","^, and nobody in here is pretending it was close.",`
`,{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{b:[`
`,"ev",{"f()":"tight"},"/ev",[{"->":".^.b",c:!0},{b:[`
`,"ev",{"VAR?":"clubName"},"out","/ev","^ got past ","ev",{"VAR?":"opponent"},"out","/ev","^ by ","ev",{"VAR?":"margin"},"out","/ev","^. Half the questions are going to be about the last three minutes.",`
`,{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{b:[`
`,"^A ","ev",{"VAR?":"margin"},"out","/ev","^-point win over ","ev",{"VAR?":"opponent"},"out","/ev","^. The room is friendly, which is its own kind of trap.",`
`,{"->":".^.^.^.6"},null]}],"nop",`
`,{"->":".^.^.^.7"},null]}],"nop",`
`,{"->":".^.^.^.6"},null]}],["du","ev","str","^loss","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,"ev",{"f()":"blowout"},"/ev",[{"->":".^.b",c:!0},{b:[`
`,"ev",{"VAR?":"margin"},"out","/ev","^ points the wrong way against ","ev",{"VAR?":"opponent"},"out","/ev","^. The first hand goes up before you have sat down.",`
`,{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{b:[`
`,"ev",{"f()":"tight"},"/ev",[{"->":".^.b",c:!0},{b:[`
`,"^Beaten by ","ev",{"VAR?":"margin"},"out","/ev","^. The room knows how close it was, and that is exactly why they will keep asking.",`
`,{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{b:[`
`,"^A ","ev",{"VAR?":"margin"},"out","/ev","^-point defeat to ","ev",{"VAR?":"opponent"},"out","/ev","^. Nobody is shouting. That is worse.",`
`,{"->":".^.^.^.6"},null]}],"nop",`
`,{"->":".^.^.^.7"},null]}],"nop",`
`,{"->":".^.^.^.6"},null]}],[{"->":".^.b"},{b:["pop",`
`,"^A tie with ","ev",{"VAR?":"opponent"},"out","/ev","^. Forty-five minutes of football and nobody has anything to celebrate.",`
`,{"->":".^.^.^.6"},null]}],"nop",`
`,"^You are ","ev",{"VAR?":"wins"},"out","/ev","^-","ev",{"VAR?":"losses"},"out","/ev","^.",`
`,{"->":"question_one"},null],question_one:[["ev",{"VAR?":"result"},"str","^loss","/str","==","/ev",[{"->":".^.b",c:!0},{b:[`
`,'^"What went wrong out there?"',`
`,{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{b:[`
`,'^"What worked today?"',`
`,{"->":".^.^.^.9"},null]}],"nop",`
`,"ev","str","^Credit the players","/str","/ev",{"*":".^.c-0",flg:20},"ev","str","^Take it on yourself","/str","/ev",{"*":".^.c-1",flg:20},"ev","str","^Keep it short","/str","/ev",{"*":".^.c-2",flg:20},{"c-0":[`
`,'^"That was the room. They prepared all week and they went and did it."',`
`,{"->":"question_two"},{"#f":5}],"c-1":[`
`,"ev",{"VAR?":"result"},"str","^loss","/str","==","/ev",[{"->":".^.b",c:!0},{b:[`
`,'^"That is on me. They were ready; I did not put them in the right places."',`
`,{"->":".^.^.^.10"},null]}],[{"->":".^.b"},{b:[`
`,'^"We had a plan and they executed it. Any credit going spare belongs to them."',`
`,{"->":".^.^.^.10"},null]}],"nop",`
`,{"->":"question_two"},{"#f":5}],"c-2":[`
`,'^"Football game. We move on to next week."',`
`,{"->":"question_two"},{"#f":5}]}],null],question_two:[["ev",{"VAR?":"starTag"},"/ev",["du","ev","str","^Showman","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"',"ev",{"VAR?":"starName"},"out","/ev","^ — ","ev",{"VAR?":"starLine"},"out","/ev",'^, and a show on the way back to the huddle. Talk about that."',`
`,{"->":".^.^.^.11"},null]}],["du","ev","str","^Quiet Pro","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"',"ev",{"VAR?":"starName"},"out","/ev","^ — ","ev",{"VAR?":"starLine"},"out","/ev",'^, and he was out of the locker room before we got there. Talk about him."',`
`,{"->":".^.^.^.11"},null]}],["du","ev","str","^Hothead","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"',"ev",{"VAR?":"starName"},"out","/ev","^ — ","ev",{"VAR?":"starLine"},"out","/ev",'^. He was in a few faces out there too. Talk about that."',`
`,{"->":".^.^.^.11"},null]}],["du","ev","str","^Film Junkie","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"',"ev",{"VAR?":"starName"},"out","/ev","^ — ","ev",{"VAR?":"starLine"},"out","/ev",'^. He says he saw it coming on tape. Talk about that."',`
`,{"->":".^.^.^.11"},null]}],["du","ev","str","^Leader","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"',"ev",{"VAR?":"starName"},"out","/ev","^ — ","ev",{"VAR?":"starLine"},"out","/ev",'^. His teammates keep pointing at him. Talk about that."',`
`,{"->":".^.^.^.11"},null]}],["du","ev","str","^Grinder","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"',"ev",{"VAR?":"starName"},"out","/ev","^ — ","ev",{"VAR?":"starLine"},"out","/ev",'^, and none of it looked easy. Talk about that."',`
`,{"->":".^.^.^.11"},null]}],["du","ev","str","^Clutch","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"',"ev",{"VAR?":"starName"},"out","/ev","^ — ","ev",{"VAR?":"starLine"},"out","/ev",'^. He seems to want the big moments. Talk about that."',`
`,{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{b:["pop",`
`,'^"',"ev",{"VAR?":"starName"},"out","/ev","^ — ","ev",{"VAR?":"starLine"},"out","/ev",'^. Talk about that."',`
`,{"->":".^.^.^.11"},null]}],"nop",`
`,"ev","str","^Praise him","/str","/ev",{"*":".^.c-0",flg:20},"ev","str","^Spread it around","/str","/ev",{"*":".^.c-1",flg:20},"ev","str","^Set the bar higher","/str","/ev",{"*":".^.c-2",flg:20},{"c-0":[`
`,"ev",{"VAR?":"starTag"},"/ev",["du","ev","str","^Showman","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"He loves a stage, and today he earned it."',`
`,{"->":".^.^.^.12"},null]}],["du","ev","str","^Quiet Pro","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"He will hate that I am saying this, but he was the best player out there."',`
`,{"->":".^.^.^.12"},null]}],["du","ev","str","^Hothead","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"He plays with a fire. Today it was pointed the right way."',`
`,{"->":".^.^.^.12"},null]}],["du","ev","str","^Film Junkie","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"Nobody in this building watches more tape. That was the payoff."',`
`,{"->":".^.^.^.12"},null]}],["du","ev","str","^Leader","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"He sets the tone in that room. Today you saw why."',`
`,{"->":".^.^.^.12"},null]}],["du","ev","str","^Grinder","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"Nothing flashy. He does the work, every snap. That is what we want."',`
`,{"->":".^.^.^.12"},null]}],["du","ev","str","^Clutch","/str","==","/ev",{"->":".^.b",c:!0},{b:["pop",`
`,'^"The bigger it gets, the calmer he gets. You cannot teach that."',`
`,{"->":".^.^.^.12"},null]}],[{"->":".^.b"},{b:["pop",`
`,'^"He has been doing that all year and most of you only noticed today."',`
`,{"->":".^.^.^.12"},null]}],"nop",`
`,{"->":"question_three"},{"#f":5}],"c-1":[`
`,'^"He is the one you saw. Ask him who blocked."',`
`,{"->":"question_three"},{"#f":5}],"c-2":[`
`,'^"Good. He knows it can be better, which is why it will be."',`
`,{"->":"question_three"},{"#f":5}]}],null],question_three:[["ev",{"VAR?":"result"},"str","^loss","/str","==","/ev",[{"->":".^.b",c:!0},{b:[`
`,'^"Where does this leave you?"',`
`,{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{b:[`
`,'^"How far can this group go?"',`
`,{"->":".^.^.^.9"},null]}],"nop",`
`,"ev","str","^Confident","/str","/ev",{"*":".^.c-0",flg:20},"ev","str","^Measured","/str","/ev",{"*":".^.c-1",flg:20},"ev","str","^Deflect","/str","/ev",{"*":".^.c-2",flg:20},{"c-0":[`
`,'^"We are ',"ev",{"VAR?":"wins"},"out","/ev","^-","ev",{"VAR?":"losses"},"out","/ev",'^ and we are not finished. Come back next week."',`
`,{"->":"done"},{"#f":5}],"c-1":[`
`,'^"One game. We will look at it honestly on Monday and then it is the next one."',`
`,{"->":"done"},{"#f":5}],"c-2":[`
`,'^"Ask me in December."',`
`,{"->":"done"},{"#f":5}]}],null],done:["^That is the room emptied.",`
`,"end",null],"global decl":["ev","str","^win","/str",{"VAR=":"result"},0,{"VAR=":"margin"},"str","^your quarterback","/str",{"VAR=":"starName"},"str","^","/str",{"VAR=":"starLine"},"str","^the opposition","/str",{"VAR=":"opponent"},0,{"VAR=":"wins"},0,{"VAR=":"losses"},1,{"VAR=":"week"},"str","^the club","/str",{"VAR=":"clubName"},"str","^","/str",{"VAR=":"starTag"},"/ev","end",null]}],t={},o={inkVersion:21,root:e,listDefs:t};export{o as default,n as inkVersion,t as listDefs,e as root};
