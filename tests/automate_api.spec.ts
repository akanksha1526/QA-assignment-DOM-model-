import {test,expect,request} from "@playwright/test";

test("API testing",async({request})=>{

    const response1 = await request.post('https://reqres.in/api/users',{
        data:{          
  "name": "morpheus",
  "job": "leader",
    }
    });

    const body1 = await response1.json();
    console.log(body1);
    console.log('Status Code:', response1.status());

    const userId = body1.id;
    console.log('User ID:', userId);


    const response2 = await request.get(`https://reqres.in/api/users/${userId}`);
    const body2 = await response2.json();
    console.log('Status code:',response2.status());

    const response3 = await request.put(`https://reqres.in/api/users/${userId}`,{
                data:{          
  "name": "john deo",
  "job": "leader",
    }
    });

    const body3 = await response3.json();
    console.log(body3);
    console.log('Status Code:', response3.status());

})