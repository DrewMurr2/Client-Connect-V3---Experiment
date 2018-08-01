Beginning of Service
{
  express_apis_for_testing: {
    file_for_testing: this.createApi('folder_for_testing/express_apis_for_testing/file_for_testing'),
    subfolder_for_testing: {
      another_file_from_subfolder: this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/another_file_from_subfolder'),
      file_from_subfolder: this.createApi('folder_for_testing/express_apis_for_testing/subfolder_for_testing/file_from_subfolder')
    }
  }
}
End of Service