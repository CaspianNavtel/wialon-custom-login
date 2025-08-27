import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json

class WialonLoginAPIView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        baseUrl = "https://local.caspiannavtel.az"

        url = f"{baseUrl}/wialon/ajax.html?svc=token/login"


        payload = {
            "params": json.dumps({
                "token": "50e5d636fe292b23cafa95666e84b34362C24C0BF990711999D59751EE7E56FA99C3BC6E"
            })
        }

        headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        }

        response = requests.get(url, data=payload, headers=headers)
        
        eid = response.json().get("eid")       
        
        url2 = f"{baseUrl}/wialon/ajax.html?svc=core/search_items&sid={eid}"      

        payload_2 = {
                "params": json.dumps({
                    "spec": {
                        "itemsType": "user",
                        "propName": "sys_name",
                        "propValueMask": username,   
                        "sortType": "sys_name"
                    },
                    "force": 1,
                    "flags": 1,
                    "from": 0,
                    "to": 0
                })
            }
        
        response_2 = requests.get(url2, data=payload_2, headers=headers)
        
        userId = response_2.json().get("items")[0].get("id")
        
        
        url3 = f"{baseUrl}/wialon/ajax.html?svc=token/update&sid={eid}"  
        
        payload_3 = {
                "params": json.dumps({
                    "callMode":"create","userId":userId,"app":"MyAppName","at":0,"dur":0,"fl":0,"p":"{}"
                })
            }
        
        response_3 = requests.get(url3, data=payload_3, headers=headers)
        token = response_3.json().get("h")
        print(token)
        
        
        return Response({"token":token}, status=status.HTTP_200_OK)

# Create your views here.
