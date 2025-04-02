// Configuration settings that can be easily modified
export const config = {
  // Model configuration
  modelAssetPath: 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task',
  delegate: 'GPU',
  
  // Number of poses to detect
  numPoses: 1,
  
  // Additional detection parameters
  minPoseDetectionConfidence: 0.5,
  minPosePresenceConfidence: 0.5,
  minTrackingConfidence: 0.5,
  outputSegmentationMasks: false,
  
  // Canvas drawing options
  landmarkOptions: {
    color: '#FF0000',
    lineWidth: 2
  },
  
  // Connection options
  connectionOptions: {
    color: '#00FF00',
    lineWidth: 1
  }
};