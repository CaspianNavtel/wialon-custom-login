import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class WialonLoginAPIView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        if not username or not password:
            return Response(
                {"error": "Username and password are required."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Wialon login URL (dəyişdirmək lazım ola bilər)
        wialon_login_url = "https://api.caspiannavtel.az/api/auth/login"

        payload = {   
            "username": username,
            "password": password
            }

        try:
            response = requests.post(wialon_login_url, json=payload)
            data = response.json()

            if 'token' in data:
                return Response(
                    {"token": data['token']},
                    status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {"error": "Login failed", "details": data},
                    status=status.HTTP_401_UNAUTHORIZED
                )

        except requests.exceptions.RequestException as e:
            return Response(
                {"error": "Wialon API request failed", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

# Create your views here.
