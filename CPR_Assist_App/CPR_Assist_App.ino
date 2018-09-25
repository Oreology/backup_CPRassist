// MPU-6050 Short Example Sketch
//www.elegoo.com
//2016.12.9



#include<Wire.h>
int brightness = 0;
int count = 0;
int redLED = 7;
int greenLED = 6;
const int MPU_addr=0x68;  // I2C address of the MPU-6050
int16_t AcX,AcY,AcZ,Tmp,GyX,GyY,GyZ;
void setup(){
  pinMode(redLED, OUTPUT);
  pinMode(greenLED, OUTPUT);
  Wire.begin();
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x6B);  // PWR_MGMT_1 register
  Wire.write(0);     // set to zero (wakes up the MPU-6050)
  Wire.endTransmission(true);
  Serial.begin(9600);
  digitalWrite(redLED, LOW);
  digitalWrite(greenLED, LOW);
}
void loop(){
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x3B);  // starting with register 0x3B (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(MPU_addr,14,true);  // request a total of 14 registers
  AcX=Wire.read()<<8|Wire.read();  // 0x3B (ACCEL_XOUT_H) & 0x3C (ACCEL_XOUT_L)    
  AcY=Wire.read()<<8|Wire.read();  // 0x3D (ACCEL_YOUT_H) & 0x3E (ACCEL_YOUT_L)
  AcZ=Wire.read()<<8|Wire.read();  // 0x3F (ACCEL_ZOUT_H) & 0x40 (ACCEL_ZOUT_L)
  Tmp=Wire.read()<<8|Wire.read();  // 0x41 (TEMP_OUT_H) & 0x42 (TEMP_OUT_L)
  GyX=Wire.read()<<8|Wire.read();  // 0x43 (GYRO_XOUT_H) & 0x44 (GYRO_XOUT_L)
  GyY=Wire.read()<<8|Wire.read();  // 0x45 (GYRO_YOUT_H) & 0x46 (GYRO_YOUT_L)
  GyZ=Wire.read()<<8|Wire.read();  // 0x47 (GYRO_ZOUT_H) & 0x48 (GYRO_ZOUT_L)
  AcX -= 600;
  AcY += 700;
  AcZ -= 14770;
  Serial.print("AcX = "); Serial.print(AcX);
  Serial.print(" | AcY = "); Serial.print(AcY);
  Serial.print(" | AcZ = "); Serial.print(AcZ);
  Serial.print(" | Tmp = "); Serial.print(Tmp/340.00+36.53);  //equation for temperature in degrees C from datasheet
  Serial.print(" | GyX = "); Serial.print(GyX);
  Serial.print(" | GyY = "); Serial.print(GyY);
  Serial.print(" | GyZ = "); Serial.println(GyZ);

if( (AcZ) < -10000 )
  {
     if( brightness + 100 < 255 )
     {
      brightness = brightness + 100;
     }
     else if( brightness + 50 < 255 )
     {
      brightness = brightness + 50;
     }
     else if( brightness + 20 < 255 )
     {
      brightness = brightness + 20;
     }
     analogWrite(greenLED, brightness);
     delay(20);
  }
    if( brightness - 10 >= 0 )
    {
      brightness = brightness - 10;
    }
   analogWrite(greenLED, brightness);
  delay(10);
count++;
count = count % 6;
if( count == 0 )
  {
   digitalWrite(redLED, HIGH);
   delay(20);
   digitalWrite(redLED,LOW);
  }
}
