import { Injectable } from '@nestjs/common';
import { AccessToken } from 'livekit-server-sdk';

@Injectable()
export class SessionService {
  async getLiveKitToken(
    roomName: string,
    participantName: string,
    role: string,
  ) {
    const at = new AccessToken(
      process.env.LIVEKIT_API_KEY,
      process.env.LIVEKIT_API_SECRET,
      // 'iDEQkridAaaWtURyE2tyqstXQXBwrSB2eiBeM1NO1pw',
      { identity: participantName },
    );

    at.addGrant({
      roomJoin: true,
      room: roomName,
      canPublish: true, // only teacher publishes by default
      canSubscribe: true, // everyone subscribes
      canPublishData: true, // for chat / hand-raise signals
    });

    const token = await at.toJwt();

    console.log('API Key:', process.env.LIVEKIT_API_KEY);
    console.log('WS URL:', process.env.LIVEKIT_URL);
    console.log('Token:', token);

    return {
      token,
      wsUrl: process.env.LIVEKIT_URL, // e.g. wss://yourapp.livekit.cloud
    };
  }
}
