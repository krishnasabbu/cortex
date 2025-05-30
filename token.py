import time

class AccessTokenManager:
    def __init__(self):
        self.token = None
        self.token_timestamp = 0
        self.refresh_interval = 10 * 60 * 60  # 10 hours in seconds

    def is_token_expired(self):
        return (time.time() - self.token_timestamp) >= self.refresh_interval

    def generate_new_token(self):
        # Replace this with your actual token generation logic
        return "new_access_token_value"

    def get_token(self):
        if self.token is None or self.is_token_expired():
            self.token = self.generate_new_token()
            self.token_timestamp = time.time()
        return self.token

# Usage
token_manager = AccessTokenManager()

def make_authenticated_request():
    token = token_manager.get_token()
    print(f"Using token: {token}")
    # Add the token to your request headers here
