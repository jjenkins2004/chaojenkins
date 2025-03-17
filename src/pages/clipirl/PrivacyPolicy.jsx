const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">ClipIRL Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: March 16, 2025</p>

      <p className="mb-4">
        ClipIRL is designed with your privacy in mind. We believe your data should remain yours—completely private, secure, and stored only on your device. This privacy policy explains what data we collect, how it’s used, and your rights as a user.
      </p>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">1. No Data Collection</h2>
          <p>
            ClipIRL does not collect, store, or transmit any personal data or audio recordings to any external servers or third parties. All audio recordings and app activity remain entirely local to your device.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">2. Local Audio Recording and Storage</h2>
          <p>
            ClipIRL uses a temporary audio buffer that continuously records audio in the background without saving any data by default. Only when you tap the “Clip” button does the app save a portion of the recent audio (5 seconds to 5 minutes) to your device’s local storage.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">3. No Account, No Cloud, No Tracking</h2>
          <ul className="list-disc list-inside ml-4">
            <li>ClipIRL does not require a user account.</li>
            <li>ClipIRL does not upload or sync clips to the cloud.</li>
            <li>ClipIRL does not track user activity or collect analytics data.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">4. Your Control</h2>
          <p>
            You have full control over your saved clips. You can view, manage, and delete your clips directly from the in-app gallery. Deleting a clip removes it permanently from your device.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">5. Permissions</h2>
          <p>
            To function properly, ClipIRL may request access to your device’s microphone and local storage. These permissions are used strictly for enabling audio recording and saving clips locally. We do not access any other data on your device.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">6. Third-Party Services</h2>
          <p>
            ClipIRL does not integrate any third-party services that collect data (e.g., analytics, ads, or crash reporting tools). Your usage remains entirely private and offline.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">7. Changes to This Policy</h2>
          <p>
            If we make changes to this privacy policy, we’ll update the date at the top of this page. Any future changes will continue to prioritize your privacy and data security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
