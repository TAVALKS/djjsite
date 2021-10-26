from rest_framework.views import APIView
from rest_framework.response import Response


class TestAPIView(APIView):

    def get(self, request, *args, **kargs):
        data = [{"id":1, "name": "Alice"}, {"id":2, "name": "Bob"}]
        return Response(data)